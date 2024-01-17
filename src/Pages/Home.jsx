const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[64px] pb-[96px] px-[76px] bg-background h-screen">
        <div className="flex flex-row items-center justify-between w-full ml-7">
          <p className="text-[64px] font-bold	">ბლოგი</p>
          <img src="/homePage-background.png" />
        </div>
        <div className="flex gap-6 items-center mt-16">
          <button className="px-4 py-2 rounded-2xl bg-bgMarket text-marketColor font-bold">
            მარკეტი
          </button>
          <button className="px-4 py-2 rounded-2xl bg-bgApp text-appColor font-bold">
            აპლიკაცია
          </button>
          <button className="px-4 py-2 rounded-2xl bg-bgAi text-aiColor font-bold">
            ხელოვნური ინტელექტი
          </button>
          <button className="px-4 py-2 rounded-2xl bg-bgUi text-uiColor font-bold">
            UI/UX
          </button>
          <button className="px-4 py-2 rounded-2xl bg-bgResearch text-researchColor font-bold">
            კვლევა
          </button>
          <button className="px-4 py-2 rounded-2xl bg-bgFigma text-figmaColor font-bold">
            Figma
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
