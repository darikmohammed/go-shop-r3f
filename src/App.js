import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  PresentationControls,
} from '@react-three/drei';

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
          {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={1} /> */}

          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Watch scale={60} rotation-x={Math.PI / 7} />
          </PresentationControls>

          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
            far={4}
          />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
