export default function Evenodd(req, res) {
    res.status(200).json('Echo " even or odd in shell script " echo "enter a number: " read n echo "result: " if [ `expr $n % 2` == 0 ] then echo "$n is even" else echo "$n is odd" fi')
  }  