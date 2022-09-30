export default function Greater3(req, res) {
    res.status(200).json('Echo "enter num1" read num1 echo "enter num2" read num2 echo "enter num3" read num3 if [ $num1 -gt $num2 ]&&[ $num1 -gt $num3 ] then echo "$num1 is greater" elif [ $num2 -gt $num1 ]&&[ $num2 -gt $num3 ] then echo "$num2 is greater" else echo "$num3 is greater" fi')
  }  