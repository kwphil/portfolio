import './app.css'

const Heading = ({title, subtitle}) => {
  return (
    <>
      <h3 class="text-white text-lg font-bold">{ title }</h3>
      <h4 class="text-[#7aff76] text-md italic">{ subtitle }</h4>
    </>
  )
}

export function App() {
  return (
    <>
      <div class="bg-[#333] h-60 text-center flex flex-col items-center justify-center">
        <h1 class="text-white text-5xl font-bold">SwiftSites Solutions</h1>
        <h2 class="text-[#7aff76] text-xl italic mt-2">Empowering Your Online Presence</h2>
      </div>
      <div class="bg-[#444] p-8">
        { Heading("Our Values", "And What We Stand For") }

      </div>
    </>
  )
}
