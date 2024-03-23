function AboutApp() {
  return (
    <>
      <p className="text-2xl">
        Welcome to <span className="italic">Stock Whisperers!</span>
      </p>
      <p className="max-w-md mt-3 text-center">
        <span className="italic">Stock Whisperers</span> allows you to receive
        updates of any particular stock based on a target price of your choice.
        <br />
        <br />
        That price can be either be buy or sell, and once your stock hits the
        price you are looking for, you will receive an email with a notification
        of that stocks closing price of the previous day.
        <br />
        <br />
        To begin, would you like to subscribe or unsubscribe from a stock
        ticker?
      </p>
    </>
  );
}

export default AboutApp;
