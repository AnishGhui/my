import Link from 'next/link' 
import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head> <title>home</title></Head>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/"><a className="">Home</a></Link></li>
        <li><Link href="/about"><a>about</a></Link></li>
        <li><Link href="/product"><a>product</a></Link></li>
        <li><Link href="/product/mobile"><a>mobile</a></Link></li>
        <li><Link href="/product/laptop"><a>laptop</a></Link></li>
      </ul>
      
    
      <Image src="/images/3.jpeg" height={400} width={400} />
      <Image src="/images/1.jpg" height={400} width={400} />

      <style JSX>{`
        h2 {
          color:red;
        }

      `} </style>



      <h2>  this is style JSX</h2>

      <h3>global css</h3>
    
    </div>
  )
}
