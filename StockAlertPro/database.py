# This class manages the database interactions that stores 1) User data and 2)Stock information.
# Current stock database includes daily (T,v,vw,o,c,h,l,t,n) T:ticker, v:volume, vw:vol weighted avg price, o:open
# c:close, h:high, l:low, t:timestamp, n:num of transact,
import requests
import pandas as pd
import os
import re
import json
from decouple import config


class Database:

    def __init__(self):
        self.__USER_FILE = "../database/users.csv"  # Currently holds user data
        self.__BASH_PATH = os.path.expanduser('~/.bash_profile')
        self.__STOCK_CSV = "../database/stocks.csv"
        self.__NOTIFICATION_CSV = "../database/notification.csv"
        self.__API_KEY = config('POLYGON_API_KEY')
        self.df_users = pd.read_csv(self.__USER_FILE, delimiter=',')
        self.df_stocks = {}

    def extract_api_key(self):
        with open(self.__BASH_PATH, 'r') as file:
            content = file.read()
            match = re.search(
                r'^export\s+POLYGON_API_KEY=(.*)$', content, re.MULTILINE)
            if match:
                api_key = match.group(1)
            else:
                raise ValueError(
                    "POLYGON_API_KEY not found in .bash_profile or .bashrc")

        os.environ['POLYGON_API_KEY'] = api_key
        polygon_api_key = os.environ.get('POLYGON_API_KEY')
        polygon_api_key = polygon_api_key.replace('"', '')
        self.__API_KEY = polygon_api_key
        return polygon_api_key

    def getStockDaily(self):

        if self.__API_KEY is None:
            raise EnvironmentError(
                "Polygon API key not found.  Set the environment variable")

        else:
            url = f"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={self.__API_KEY}"
            # Make a GET request to the API and fetch the data
            response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            self.df_stocks = pd.DataFrame(data['results'], columns=[
                                          'T', 'v', 'vw', 'o', 'c', 'h', 'l', 't', 'n'])
            self.df_stocks.to_csv(self.__STOCK_CSV, index=False)
        else:
            print(f"Request failed with status code {response.status_code}")

    def getUserAction(self, row):
        return self.df_users['name'][row], self.df_users['email'][row], self.df_users['stock'][row], self.df_users['price'][row], self.df_users['action'][row]

    def getStockCsv(self):
        self.df_stocks = pd.read_csv(self.__STOCK_CSV, delimiter=',')
        self.df_stocks = self.df_stocks.set_index('T')

    def compareStock(self, ticker, tgt_price, action):
        self.getStockCsv()
        close_price = self.df_stocks.loc[ticker]['c']
        if action == 'buy':
            if close_price < tgt_price:
                return close_price

        elif action == 'sell':
            if close_price > tgt_price:
                return close_price
        return 0

    def createDailyEmailList(self):
        idx_mail = pd.DataFrame(columns=['name', 'email', 'stock', 'close'])
        self.getStockCsv()
        close = 0.0
        max_user = len(self.df_users)
        for i in range(0, max_user):
            name, email, stock, price, action = self.getUserAction(i)
            close = self.compareStock(stock, price, action)
            if close != 0:
                df2 = pd.DataFrame([[name, email, stock, close]], columns=[
                                   'name', 'email', 'stock', 'close'])               
                idx_mail = idx_mail.copy() if df2.empty else df2.copy() if idx_mail.empty else pd.concat([idx_mail, df2])

        idx_mail.to_csv(self.__NOTIFICATION_CSV, header=False, index=False)
        return len(idx_mail)


if __name__ == "__main__":
    getStocks = Database()
    # getStocks.extract_api_key()
    getStocks.getStockDaily()
    getStocks.createDailyEmailList()
