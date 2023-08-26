import Image from 'next/image'

export default function Home() {

  let imageNames = ['0.jpeg'];

  function imgnames(){
    for(let i=1;i<16;i++){
imageNames.push(`${i}.jpeg`)
    }
  }
imgnames()
  return (

    <main className="flex min-h-screen flex-col items-center justify-between py-24">

     

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-4xl">
      Toyota Runner
      </div>
      <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {imageNames.map((imageName, index) => (
          <div key={index} className="image-item">
            <Image
               src={`/${imageName}`}
              alt={`Image ${index + 1}`}
              className="w-full "
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
      
    </main>
  )
}
