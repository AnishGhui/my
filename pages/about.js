import Link from 'next/link' 
import Image from 'next/image'
import Head from 'next/head'
export default function About() {
    return (
      <div>
          <Head> <title>about</title></Head>
        <h1>About page</h1>
         <ul>
        <li><Link href="/"><a className="">Home</a></Link></li>
        <li><Link href="/about"><a>about</a></Link></li>
        <li><Link href="/product"><a>product</a></Link></li>
        <li><Link href="/product/mobile"><a>mobile</a></Link></li>
        <li><Link href="/product/laptop"><a>laptop</a></Link></li>
      </ul>
      <Image src="/images/2.jpeg" height={500} width={500} />
      <Image src="/images/1.jpg" height={400} width={400} />

      <h3>i am global</h3>
    
      </div>
    )
  }
  