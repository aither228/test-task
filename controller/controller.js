let ticket_num = 0;
let fibo_val = 0;

const getTicket = async (req, res) => {
  try {
    const req_value = req.body; // {"number": "XXX"}
    console.log("Request body:", req_value);
    
    // generate ticket number by increasing
    ticket_num += 1;
    // replay to user's post
    res.send({
      ticket: ticket_num.toString()
    });

    // then calculate fibonacci number
    const sqrt5 = Math.sqrt(5);
    const fibo_ind = Number(req_value.number);
    fibo_val = parseInt(1 / sqrt5 * (Math.pow(((1 + sqrt5) / 2), fibo_ind) - Math.pow(((1 - sqrt5) / 2), fibo_ind)));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getFibonacci = async (req, res) => {
  try {
    // http://localhost:5555/output?ticket=YYY
    const { ticket } = req.query;
    console.log("Request ticket:", ticket,fibo_val);
    
    if (ticket_num == ticket) {
      res.send({ Fibonacci: fibo_val });
    } else {
      res.status(400).send({
        message: 'Not Found'
      })
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getTicket,
  getFibonacci
}