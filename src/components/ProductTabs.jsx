import { useState } from "react";
import { ChevronRight } from "lucide-react";

const tabs = ["Description", "Additional Information", "Reviews (0)"];

// Description sekmesinin içeriği (görsel + metin + liste)
function DescriptionContent() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {/* Görsel */}
      <img
        src="/description.jpg"
        alt="Description"
        className="aspect-[4/3] w-full rounded object-cover"
      />

      {/* Orta metin */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
        <p className="text-sm text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-sm text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-sm text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>

      {/* Sağ liste */}
      <div className="flex flex-col gap-6">
        {[1, 2].map((block) => (
          <div key={block}>
            <h3 className="mb-4 text-2xl font-bold text-[#252B42]">
              the quick fox jumps over
            </h3>
            <ul className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#737373]">
                  <ChevronRight size={16} className="text-[#23A6F0]" />
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="w-full">
      {/* Sekme çubuğu */}
      <div className="flex flex-wrap justify-center gap-6 py-10 md:gap-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold transition-colors ${
              activeTab === tab ? "text-[#252B42]" : "text-[#737373]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mx-6 border-t border-[#ECECEC] md:mx-[195px]" />

      {/* İçerik */}
      <div className="px-6 py-12 md:px-[195px]">
        {activeTab === "Description" && <DescriptionContent />}
        {activeTab === "Additional Information" && (
          <p className="text-sm text-[#737373]">Additional information content...</p>
        )}
        {activeTab.startsWith("Reviews") && (
          <p className="text-sm text-[#737373]">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;