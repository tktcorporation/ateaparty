import App from '../components/App'
import Image from "next/image";

export default function Home() {
  return (
    <App>
      <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={1200}
            height={300}
          />
    </App>
  )
}
