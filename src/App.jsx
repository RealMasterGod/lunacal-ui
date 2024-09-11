import LeftBottom from "./components/LeftBottom"
import LeftTop from "./components/LeftTop"


function App() {
  return (
    <div className="flex h-screen items-center">
      <div className="flex h-[85%] w-[90%] max-w-[1568px] max-h-[1000px] mx-auto lg:gap-8 md:gap-5 xl:gap-[50px]">
        <div className="lg:min-w-[50%] md:min-w-[35%] bg-[#616161d1] rounded-[27px] border border-[#96bee7]">
        </div>
        <div className="min-w-[45%] h-full flex flex-col gap-[20px]">
          <LeftTop />
          <hr className="w-4/5 self-center min-h-1 border-none bg-gradient-to-t from-[#2828281a] to-[#f8f8f81a] shadow-hrShadow rounded-[2.46px]"/>
          <LeftBottom />
          <hr className="w-4/5 self-center min-h-1 border-none bg-gradient-to-t from-[#2828281a] to-[#f8f8f81a] shadow-hrShadow rounded-[2.46px]"/>
        </div>
      </div>

    </div>
  )
}

export default App
