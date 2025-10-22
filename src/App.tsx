import { useRef, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ReactTestPage from './ReactTestPage'

function Home() {
    const [show, setShow] = useState(false)
    const [candleBlown, setCandleBlown] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    const handleBlowCandle = () => {
        // setCandleBlown(true)
        // setTimeout(() => {
        //     setShow(true)
        // }, 500)
        ref.current?.focus();
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen">
            <h1 className="text-3xl font-bold text-purple-800 text-center px-4">
                Bí mật sẽ hiện ra khi bạn thổi nến 🕯️
            </h1>
           <input ref={ref} type="text" placeholder="Nhập tên của bạn" />
            {/* Candle Button */}
            <div className="relative flex justify-center">
                <button 
                    autoFocus 
                    className={`bg-transparent border-none cursor-pointer relative p-5 transition-transform duration-200 hover:scale-110 ${candleBlown ? 'cursor-not-allowed transform-none' : ''}`}
                    onClick={handleBlowCandle}
                    disabled={candleBlown}
                >
                    <div className="w-5 h-20 bg-gradient-to-b from-amber-800 to-amber-700 rounded-lg relative shadow-inner mx-auto"></div>
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-5 bg-gradient-radial from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse ${candleBlown ? 'animate-spin scale-0 opacity-0 transition-all duration-500' : ''}`} 
                         style={{
                             background: 'radial-gradient(circle, #FFD700, #FFA500, #FF4500)',
                             borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                             boxShadow: '0 0 20px #FFD700, 0 0 40px #FFA500'
                         }}>
                    </div>
                </button>
            </div>
            
            {/* Birthday Cake Animation */}
            {show && (
                <div className="relative">
                    <div className="relative w-48 h-36 mx-auto">
                        {/* Cake Base */}
                        <div className="absolute bottom-0 left-2 w-44 h-12 bg-gradient-to-r from-amber-800 to-amber-700 rounded-full shadow-lg"></div>
                        <div className="absolute bottom-10 left-7 w-36 h-12 bg-gradient-to-r from-pink-300 to-pink-200 rounded-full shadow-lg"></div>
                        <div className="absolute bottom-20 left-12 w-28 h-12 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full shadow-lg"></div>
                        
                        {/* Cake Decorations */}
                        <div className="absolute top-5 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-10 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute top-15 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Message under the cake */}
                    <div className="mt-8 text-center">
                        <h2 className="text-3xl font-bold text-amber-800 mb-2" 
                            style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                background: 'linear-gradient(45deg, #FF0000, #FF8000, #FFFF00, #00FF00, #0080FF, #8000FF)',
                                backgroundSize: '400% 400%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'rainbow 2s linear infinite'
                            }}>
                            Happy Birthday Huong San!
                        </h2>
                        <p className="text-xl text-amber-800 font-semibold">22-10 🎉</p>
                    </div>
                    
                    {/* Confetti Animation */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full" 
                             style={{
                                 left: '10%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite'
                             }}></div>
                        <div className="absolute w-3 h-3 bg-green-500 rounded-full" 
                             style={{
                                 left: '20%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite 0.5s'
                             }}></div>
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full" 
                             style={{
                                 left: '30%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite 1s'
                             }}></div>
                        <div className="absolute w-3 h-3 bg-yellow-500 rounded-full" 
                             style={{
                                 left: '40%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite 1.5s'
                             }}></div>
                        <div className="absolute w-3 h-3 bg-purple-500 rounded-full" 
                             style={{
                                 left: '60%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite 2s'
                             }}></div>
                        <div className="absolute w-3 h-3 bg-cyan-500 rounded-full" 
                             style={{
                                 left: '80%',
                                 top: '-20px',
                                 animation: 'confetti-fall 3s linear infinite 2.5s'
                             }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/react" element={<ReactTestPage />} />
            </Routes>
        </Router>
    )
}

export default App