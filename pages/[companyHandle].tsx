import { useParams } from 'next/navigation';

export default function Home() {
  const params = useParams()
  console.log(params)
  return (
    <div >

    </div>
  );
}
