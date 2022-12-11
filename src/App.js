import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Watch from './Components/Watch';

function App() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-8">
      <div className="flex flex-col gap-4">
        <h1 className=" text-8xl font-bold">Our Best Collection for You! </h1>
        <p>
          The style of watches available to customers are endless and profits
          also endless.
        </p>
        <div className=" flex gap-4">
          <button className="text-white bg-orange-500 px-4 py-2 rounded">
            <ShoppingCartIcon /> Add to Cart
          </button>

          <button className="hover:border-orange-500 hover:border-solid border-2 rounded px-4 py-1 border-none">
            More Info <NavigateNextIcon />
          </button>
        </div>
      </div>
      <div className="" id="watch-canvas-container">
        <Canvas>
          <OrbitControls />
          <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={1} />
          <Watch />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
