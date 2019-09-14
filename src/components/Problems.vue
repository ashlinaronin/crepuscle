<template>
  <div>
    <h3>problems / solutions</h3>
    <ul>
      <li>
        Infrared camera doesn’t work without infrared illumination
        <ul>
          <li>First, I tried using a single 850nm infrared LED</li>
          <li>
            It wasn't bright enough, so I disassembled an infrared floodlight
            used by scientists for nocturnal research
          </li>
          <li>
            I had to rewire the power supply to run off small batteries, remove
            the lenses and disable the ambient light sensor
          </li>
        </ul>
      </li>
      <li>
        Soldering wires to wires is harder than soldering to PCB
        <ul>
          <li>
            Folks taught me that applying solder and flux to both wires first,
            applying heatshrink, then twisting them together and soldering is
            the way to go
          </li>
        </ul>
      </li>
      <li>
        Difficulty connecting to the pi after taking it out of the water
        <ul>
          <li>
            It appears that when I had connected the infrared light to the 5V
            out on the Pi board, it was drawing a high amount of current (1.8
            amps)
          </li>
          <li>
            The Pi itself draws around 80 mA, and the battery provides around
            2.1 A at peak capacity
          </li>
          <li>Solution was to use a separate battery pack for the light</li>
        </ul>
      </li>
      <li>
        Running out of space on small sd card (908M of 8gigs left after OS)
        <ul>
          <li>
            Set JPEG compression setting to lower so each file takes up less
            space
          </li>
        </ul>
      </li>
      <li>
        There isn't much to see in the middle of the night, since infrared light
        doesn't carry far in mud puddles
        <ul>
          <li>
            Decided to focus on sunrise since the way light breaks through mud
            is quite interesting
          </li>
        </ul>
      </li>
    </ul>
    <p>
      Shout outs to everyone at Dinacon 2019 who helped me with this project--
      especially Andy Quitmeyer, Sid Drmay and Rob Faludi.
    </p>
    <p>
      Many thanks to the Oregon Arts Commission for funding my participation in
      this experience.
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
