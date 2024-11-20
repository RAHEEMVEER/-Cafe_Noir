import React from "react";
import "../style.css";
import Image from "next/image";
import menu1 from "../../public/images1/refreshment.png";
import menu2 from "../../public/images1/hot-beverages.png";
import menu3 from "../../public/images1/cold-beverages.png";
import menu4 from "../../public/images1/special-combo.png";
import menu5 from "../../public/images1/desserts.png";
import menu6 from "../../public/images1/burger-frenchfries.png";

export default function Menu() {
  return (
    <section className="Menu" id="menu">
      <div className="section-heading"><h1>Our Menu</h1></div>

      <div className="menu-box">
        {/* box -1 */}
        <div className="box">
          <div className="menu-image"><Image src={menu2} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Hot Beverages</h3><p>Wide range of Steaming hot coffee to make you fresh and light.</p></div>
        </div>

        {/* box -2 */}
        <div className="box">
          <div className="menu-image"><Image src={menu1} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Refreshment</h3><p>Fruit and icy refreshing drink to make feel refresh.</p></div>
        </div>

        {/* box -3 */}
        <div className="box">
          <div className="menu-image"><Image src={menu3} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Cold Beverages</h3><p>Creamy and frothy cold coffee to make you cool.</p></div>
        </div>

        {/* box -4 */}
        <div className="box">
          <div className="menu-image"><Image src={menu4} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Special Combos</h3><p>Your favorite eating and drinking combotions.</p></div>
        </div>

        {/* box -5 */}
        <div className="box">
          <div className="menu-image"><Image src={menu5} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Dessert</h3><p>Satiate your palate and take you on a culinary treat.</p></div>
        </div>

        {/* box -6 */}
        <div className="box">
          <div className="menu-image"><Image src={menu6} alt="menu-pic" /></div>
          <div className="menu-content"><h3>Burger & French Fries</h3><p>Quick bites to satisfy your small size hunger.</p></div>
        </div>
      </div>
    </section>
  );
}
