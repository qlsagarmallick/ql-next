'use client'
import { useState } from "react";
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';
import MegaMenu from '../MegaMenu';
import Arrow from '../../../public/arrowfooter.svg'

const NavList = ({ data }) => {
  const value = data?.data?.attributes?.Navbar || {};
  const Menu = value?.NavbarMenu || [];
  const navFooter = value?.NavbarFooter || [];
  // console.log('mmm',Menu)
  const navbarMenu = value?.NavbarLinks || {};
  const logo = 'http://127.0.0.1:1337' + value?.Logo?.data?.attributes?.url || '';
  console.log('val',navFooter)

  // DATA DISTRIBUTION FOR MEGAMENU 
  const valueDistribution1=Menu.slice(0,7)
  const valueDistribution2=Menu.slice(7,8)
  const valueDistribution3=Menu.slice(9,15)
  // console.log('valueDistribution1',valueDistribution1)
  // console.log('valueDistribution2',valueDistribution2)
  // console.log('valueDistribution3',valueDistribution3)

  // Use individual states for each menu item
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showHireTalent, setShowHireTalent] = useState(false);

  const toggleMenu = (menuTitle) => {
    switch (menuTitle) {
      case 'Services':
        setShowServices(!showServices);
        setShowIndustries(false)
        setShowHireTalent(false)
        break;
      case 'Industries':
        setShowIndustries(!showIndustries);
        setShowServices(false);
        setShowHireTalent(false)
        break;
      case 'Hire Top Talent':
        setShowHireTalent(!showHireTalent);
        setShowIndustries(false)
        setShowServices(false);
        break;
      // Add cases for other menu items if needed
      default:
        break;
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Image alt="" width={200} height={200} src={logo} />
        <div className="flex">
          {navbarMenu.map((menu, index) => (
            <div className="px-6 flex " key={index}>
              {menu.LinkTitle === 'Services' ||
              menu.LinkTitle === 'Industries' ||
              menu.LinkTitle === 'Hire Top Talent' ? (
                <>
                  <button className="flex justify-center items-center gap-3" onClick={() => toggleMenu(menu.LinkTitle)}>
                    <h4>{menu.LinkTitle}</h4>
                    {menu.LinkTitle ==='Services' &&(
                    <Image className={`${showServices ? 'rotate-180 transition-all' : 'transition-all'}`} alt="" width={20} height={20} src={Arrow} />
                  )}
                  {menu.LinkTitle ==='Industries' &&(
                    <Image className={`${showIndustries  ? 'rotate-180 transition-all' : 'transition-all'}`} alt="" width={20} height={20} src={Arrow} />
                  )}
                  {menu.LinkTitle ==='Hire Top Talent' &&(
                    <Image className={`${showHireTalent ? 'rotate-180 transition-all' : 'transition-all'}`} alt="" width={20} height={20} src={Arrow} />
                  )}
                  </button>
                  {menu.LinkTitle === 'Services' && (
                    <div className={`${showServices ? 'block' : 'hidden'}`}>
                      <MegaMenu footer={navFooter} value={valueDistribution1} />
                    </div>
                  )}
                  {menu.LinkTitle === 'Industries' && (
                    <div className={`${showIndustries ? 'block' : 'hidden'}`}>
                      <MegaMenu footer={navFooter}  value={valueDistribution2} />
                    </div>
                  )}
                  {menu.LinkTitle === 'Hire Top Talent' && (
                    <div className={`${showHireTalent ? 'block' : 'hidden'}`}>
                      <MegaMenu footer={navFooter}  value={valueDistribution3} />
                    </div>
                  )}
                </>
              ) : (
                <button>
                  <h4>{menu.LinkTitle}</h4>
                </button>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavList;