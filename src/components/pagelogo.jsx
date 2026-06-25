import logo1 from "../assets/logo1.png";

function PageLogo() {
  return (
    <div className="absolute top-14 -right-2 lg:-top-8 lg:-left-4 lg:right-auto z-20 pointer-events-none select-none">
      <img
        src={logo1}
        alt="JIP Caterers"
        className="w-24 sm:w-24 md:w-24 lg:w-[280px] opacity-90"
      />
    </div>
  );
}

export default PageLogo;