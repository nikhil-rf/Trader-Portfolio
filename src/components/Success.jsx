import React from 'react';

function Success() {
  return (
    <section className="bg-[#1F5F4B] text-white py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Trader Success Stories</h2>
      <p className="mb-10">Hear from traders who have transformed their approach and results through our coaching and resources.</p>

      {/* <div className="bg-white/30 mx-auto w-11/12 md:w-3/4 p-6 rounded shadow-md text-black flex items-center space-x-6">
  <img src="/avatar.jpg" alt="Trader" className="w-20 h-20 rounded-full object-cover" />
  <p className="text-base font-medium">
    "Michael's analytical approach to market psychology was exactly what I <br /> needed. I've reduced my emotional trading and increased my win rate by <br />35% in just three months."
  </p>
</div> */}
      <div className="bg-white/30 mx-auto w-11/12 md:w-3/4 p-6 rounded shadow-md text-black flex items-center space-x-50">
        <img src="/avatar.jpg" alt="Trader" className="w-20 h-20 rounded-full object-cover" />
        <p className="text-base font-medium">
          "Michael's analytical approach to market psychology was exactly what I <br /> needed. I've reduced my emotional trading and increased my win rate by <br />35% in just three months."
        </p>
      </div>



      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white/50 rounded-full"></span>
        <span className="w-2 h-2 bg-white/50 rounded-full"></span>
      </div>
    </section>
  );
}

export default Success;
