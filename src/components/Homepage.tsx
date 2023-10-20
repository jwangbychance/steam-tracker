const Homepage = () => {
  return (
    <main className="px-3 flex flex-col text-[#E0E0E0]">
      <div className="mb-8">
        <div className="border border-[#BD87F9] bg-[#BD87F9] w-fit rounded-full px-3 py-1 text-black font-semibold">
          Recently Played Games
        </div>
        <div>Games...</div>
      </div>
      <div className="mb-8">
        <div className="border border-[#BD87F9] bg-[#BD87F9] w-fit rounded-full px-3 py-1 text-black font-semibold">
          Achievements
        </div>
        <div>Achievements...</div>
      </div>
    </main>
  );
};

export default Homepage;
