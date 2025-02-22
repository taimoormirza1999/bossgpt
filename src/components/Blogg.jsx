import Slider from "./utils/Slider";

const Blogg = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-semibold">Collaborate across tools and teams</h2>
        <p className="text-gray-400">
          Expand the capabilities of our system with a wide variety of integrations that keep 
          everyone in your organization aligned and focused.
        </p>
      </div>
      <Slider />
    </div>
  );
};

export default Blogg;
