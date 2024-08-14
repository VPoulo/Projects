from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

__DB_PATH = "../database"
__USERS_FILE = "users.csv"
__USERS_PATH = os.path.join(__DB_PATH, __USERS_FILE)

def makeUsersDirAndFile():
    if not os.path.exists(__DB_PATH):
        os.mkdir(os.path.realpath(__DB_PATH))
    if not os.path.exists(__USERS_PATH):
        file = open(__USERS_PATH, "a")
        file.write("name,email,ticker,action,price")
        file.close()


@app.route("/insert", methods=["POST"], strict_slashes=False)
def insert():
    name = str(request.json["name"]).lower()
    email = str(request.json["email"]).lower()
    ticker = str(request.json["ticker"]).upper()
    action = str(request.json["action"]).lower()
    price = request.json["price"]
    # Load file
    df = pd.read_csv(__USERS_PATH)

    # Trim column headers
    df.columns = df.columns.str.strip()

    # Trim all values in DF.
    df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

    # Insert new entry
    new_entry = {
        "name": name,
        "email": email,
        "stock": ticker,
        "action": action,
        "price": price,
    }
    df.loc[len(df)] = new_entry

    # Save dataframe as CSV by overwriting previous file.
    df.to_csv(__USERS_PATH, index=False)

    return "ok", 200


@app.route("/delete", methods=["DELETE"], strict_slashes=False)
def delete():
    email = str(request.json["email"]).lower()
    ticker = str(request.json["ticker"]).upper()
    # Load file
    df = pd.read_csv(__USERS_PATH)

    # Trim column headers
    df.columns = df.columns.str.strip()

    # Trim all values in DF.
    df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

    # Create drop condition
    condition = (df["email"] == email) & (df["stock"] == ticker)

    # Delete entry
    df.drop(df[condition].index, inplace=True)

    # Reset the index after filtering
    df.reset_index(drop=True, inplace=True)

    print(df)

    # Save dataframe as CSV by overwriting previous file.
    df.to_csv("../database/users.csv", index=False)

    return "ok", 200


if __name__ == "__main__":
    if not os.path.exists(__USERS_PATH):
        makeUsersDirAndFile()
    app.run()
