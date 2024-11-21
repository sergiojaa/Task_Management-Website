    import down from '../assets/down.png'
    import kanban from '../assets/kanban.png'
    import logo from '../assets/logo.png'
    import headerLines from '../assets/header-lines.png'
    import plusImage from '../assets/plus.png'
    import samirgoli from '../assets/samirgoli.png'
    import addnewtaskLogo from '../assets/addnewtask.png'
    import { useState } from 'react'
    export default function Header() {
        const [isVisible, setIsVisible] = useState(false)
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = () => {
            setIsClicked(!isClicked);
          };
        function checkScreenWidth(){
            if(window.innerWidth >= 768){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }
        window.addEventListener("resize", checkScreenWidth);

        // Optionally check the initial screen width (e.g., when the component renders)
        if (!isVisible && window.innerWidth > 768) {
            setIsVisible(true);
        }

    return (
        <div >
            <div className='flex justify-between mt-[20px] md:mt-[30px]'>
            <div className='flex items-center' >
                <div className='ml-[15px] md:ml-[25px]'>
                        <img src={headerLines} alt="" />
                    </div>
                    <div>
                {isVisible && (
                    <div>
                        <img className='ml-[10px]' src={kanban} alt="Kanban" />

                    </div> 

                )}
            </div>
                    <div className='ml-[20px]'>
                        <img src={logo} alt="" />
                    </div>
                    {!isVisible && (
        <div onClick={handleClick}>
          <img 
            src={down} 
            className={`ml-2 ${isClicked ? 'rotate-180' : ''}`} 
            alt="" 
          />
        </div>
      )}
                </div>
                <div className='flex items-center'>
                {isVisible ? (
                            <div className="ml-[10px] pr-[20px]">
                                <img src={addnewtaskLogo} alt="Add New Task" />
                            </div>
                        ) : (
                            <div className="mr-[16px]">
                                <img src={plusImage} alt="" />
                            </div>
                        )}

                    <div className='mr-[11px] md:mr-[20px]  p-[5px]'>
                        <img src={samirgoli} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
    }
