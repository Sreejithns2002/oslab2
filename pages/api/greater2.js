export default function Greater2(req, res) {
    res.status(200).json('Echo "enter num1" read num1 echo "enter num2" read num2 if [ $num1 -gt $num2 ] then echo "$num1 is greater" else echo "$num2 is greater" fi')
  }  