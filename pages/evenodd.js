import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Evenodd() {
  return (
    <p>
        echo "    even or odd in shell script   "\n
echo "Enter a number:"\n
read n\n
echo "RESULT:"\n
if [ `expr $n % 2` == 0 ]\n
then	\n
	echo "$n is even"\n
else	\n
	 echo "$n is odd"\n
fi\n

    </p>
  )
}
