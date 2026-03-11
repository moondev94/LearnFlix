import '../App.css'

export default function Classes() {
   return (
      <div className="page-transition">
         <main className='main'>
            <Card
               content="Aula 1"
               button1={<FontAwesomeIcon icon={faPlay} />}
               button2=""
               button3={<FontAwesomeIcon icon={faBookmark} />}
            />
            <Card
               content=" Aula 2"
               button1={<FontAwesomeIcon icon={faPlay} />}
               button2=""
               button3={<FontAwesomeIcon icon={faBookmark} />}
            />
            <Card
               content="Aula 3"
               button1={<FontAwesomeIcon icon={faPlay} />}
               button2=""
               button3={<FontAwesomeIcon icon={faBookmark} />}
            />
         </main>
      </div>

   )
}

