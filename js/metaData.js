const mainText = {
    "MAIN_IMAGE": "img/bike_riding/main_picture_3.jpg",
    "ABOUT_IMAGE": "img/random/moab_young.JPG",
    "INTRO_TEXT": "My name is Jason Kasari, and I’m a software developer/bike industry professional/chimney sweep/lifelong learner. I am passionate about engaging in new ideas and about working alongside others to solve problems.",
    "ABOUT_TEXT": "Growing up I was always building something with my hands. From Legos to wooden structures for mountain bikes, I was always working on something. I started riding bikes at a very young age, and naturally, I started fixing the bikes I was riding. Mechanical understanding came naturally to me. At 14 I begin volunteering as a mechanic at the local nonprofit community bike shop to gain job experience. A few years later, I would join the high school robotics team. I designed and worked exclusively on the mechanical aspects of the robot. Often times poking fun at the software kids for not understanding how a crescent wrench works. During this time I started taking classes at Central Oregon Community College and was quickly becoming a full-time mechanic at Hutch's Bicycles. I was very young at the shop working with both adult coworkers and customers. By the time I left in 2015 I had earned more nicknames than I could count and had become a key person at the shop. I noticed that a lot of my coworkers had degrees in fields they decided not to pursue. So when it came time to move on to university I questioned if I was really ready to 100% commit to a career. I chose instead to move to Bellingham Washington to work in bike shops until I had a better idea of what I wanted to do, gaining valuable life experiences along the way. The next 5 or so years in Washington were filled with enough bike riding, adventures, and general shenanigans to last a lifetime! I gained many life skills and waited patiently for a new career to present itself. While working late at the Lost Co bike shop one night, a buddy of mine convinced me to give coding a try that winter. And much to the dismay of my high school self, I loved it. I found that all the mechanical problem-solving skills I had gained translated over perfectly to software. My friend Erik, a senior software engineer at Mozzila, first helped me get started with c++. Next, my dad sent me a starter Arduino kit and that really got me going. All of a sudden I could design physical objects and then use software to bring them to life, it doesn’t get any cooler than that! I now have 100% confidence that this is what I want to do for a career. I have lofty goals for where I see myself and am willing to put in the work to get there!!",
    "EMAIL": "email | jkasari@outlook.com",
    "PHONE": "phone | 541-610-5575",
    "GITHUB": "github | jkasari",
}

const colors = {
    "COLOR_1": "#C7CACC",
    "COLOR_2": "#202d31",
    "COLOR_3": "#F1CB24",

}

const blogPosts = [
    {
        "ID": "0",
        "TITLE": "Marine Cytometery",
        "TITLE_COLOR": "COLOR_1",
        "TILE_TEXT": "- A small blerb about that thing I did.",
        "TILE_IMAGE": "img/marcy/lights_on_good.jpg",
        "HEADER_IMAGE": "img/marcy/lab1.jpg",
        "CONTENT": {
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_1": "img/marcy/lights_compared.jpg",
            "TITLE_1": "This is a Test Title",
            "TEXT_2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_2": "img/marcy/first_pcb_intub.jpg",
            "TEXT_3": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TEXT_4": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_3": "img/marcy/fluidics_board_1.jpg",
            "TEXT_5": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    },
    {
        "ID": "1",
        "TITLE": "Binary Clock",
        "TITLE_COLOR": "COLOR_3",
        "TILE_TEXT": "- A small blerb about that thing I did.",
        "TILE_IMAGE": "img/binary_clock/clock.gif",
        "HEADER_IMAGE": "img/binary_clock/title-image.jpg",
        "CONTENT": {
            "TITLE_1": "Problem",
            "TEXT_1": "I was starting to work with 0's and 1's and could not yet fluently think in binary. ",
            "TITLE_2": "Solution",
            "TEXT_2": "Spend approximately 8 million hours building a clock that tells time in binary and does some other cool stuff.",
            "TITLE_5": "The Clock",
            "TEXT_3": "The final clock uses colors to represent 0’s and 1’s. It has two displays, one that tells time in 16bits and one in 24bits. The 16bit uses 4bits for hours and 6bits for minutes and seconds. The 24bit displays time in 6 binary numbers, each using 4bits. This second display reads like a digital clock: 02:45:37. All the colors are adjustable and the clock automatically adjusts its brightness based on the surrounding light. When the clock is tipped, the time-telling LEDs bounce around the screen with gravity. I am very happy with the final product, but it was quite a journey to get here.",
            "IMAGE_1": "img/binary_clock/displays-sidebyside.jpg",
            "TEXT_4": "A long time ago, I thought binary was simply too much for a human brain to understand. I mean, how could one possibly make sense of 01000010 01001111 01001111 01000010 01010011? Working at Marine Cytometry was my first introduction to the concept of a register. This made it obvious that despite understanding binary at the time, I still couldn’t quickly translate from hex to binary to base 10 in my head. Now this really isn’t that big of an issue and the solution would have come naturally with time, but I saw the 8x8 RGB LED grid lying in a bin and my imagination went wild. ",
            "TEXT_5": "I had a working prototype of what I wanted within a few hours. Each LED in use would use two colors to represent 0 or 1. It used 4bits to tell hours, 8bits for minutes, and seconds. I duct-taped some plastic I had lying around to mask the glare of the LEDs and sat back. This was too easy, the clock needed to do more. Again, I had basically achieved my original goal at this point. Reading the clock became easy within a day or two, but I wasn’t satisfied with the project yet. ",
            "IMAGE_2": "img/binary_clock/first-with-screen.jpg",
            "TEXT_6": "I had seen a random Arduino project online where a person had a LED grid with specific LEDs that would bounce around when the grid was tipped. I saw no reason that my clock shouldn’t do exactly the same thing. I had an accelerometer strapped to the back of the grid instantly. This new idea turned into quite the lesson in programming structure. I struggled with design layouts that would let the project function both as a clock and respond to the accelerometer. I ended up taking a mechanical approach, how would I solve this problem using real-life objects? The code I ended up with treats each time-telling LED like its own independent object, tasked only with changing its color when told. This approach allows each object in my code to only be ",
            "IMAGE_8": "img/binary_clock/fall-down.jpg",
            "TEXT_7": "The clock also had an issue when being used at night, with the LEDs bright enough to see during the day lit the entire room at night. I grabbed a simple photoresistor and went to work. The first Idea I had was to change the color of the LEDs along with the brightness. This would allow me to choose color templates that had varying amounts of contrast depending on the room light. This worked great with the original plastic screen, but the contrast problem went away as I improved the screen design. So I started directly feeding the readings from the photoresistor into the brightness of the new screen. This worked great in theory, but the sensitivity of the photoresistor was too high and the screen was left flickering in anything but very consistent light. This final problem was solved using the software. I wrote an algorithm that took a variable input stream and returned a smooth output stream. Now the screen smoothly dims or brightens with the surrounding light. ",
            "TEXT_8": "With the software and electronics mostly done, I needed housing that wasn’t just duct tape and plastic. This project was the reason I ended up buying a 3D printer. The printer seemed like the best solution to solve the lights bleeding into each other. A printed grid fit over the LEDs created nice sharp squares. The rest of the housing was a simple box. Next, it was time for the screen itself. After trying every random semi-transparent material I had access to, I ended up with plexiglass with sticker vinyl covering one side. This makes it possible for the lights to dim enough at night and still have a sharp contrast. A couple of tweaks on the outer case and this thing was looking pretty good compared to the first one. ",
            "TEXT_9": "Finally, operating the clock as a clock was the last step. I am a firm believer in making controls as simple and intuitive as possible. I settled on 3 buttons, and each one has an immediate nonpermanent effect on the clock. The first button changes the display, the second changes the color of the time-telling LEDs, and the third changes the background. This means that anybody can easily figure out the clock operation without the need for instructions. I found that holding a button down for a different result is intuitive for most people. For this reason, holding the first button down puts the clock in time-adjust mode. It is very easy to use, though I often think about easier ways to operate the clock, maybe one day I will change it. ",
            "IMAGE_9": "img/binary_clock/v1-v2.jpg",
            "TITLE_3": "Skills Used",
            "TEXT_10": "Being an earlier project, I was exposed to many concepts for the first time during the build. This was my first time working with i2c and Arduinos Wire library. This was also both the biggest electronic and software project I had taken on yet. Developing the software made me much more comfortable with the underlying concepts behind c++. The program is heavy for an Arduino Nano and I had to go back multiple times to better allocate memory to save space. Building the electronic side showed me how much of a paing soldering PCB boards is. This showed me the importance of learning to design my own printed PCB boards. The case on gave me a good intro to Fusion 360 and 3D modeling. The last 3D modeling software I used was AutoCad back in High School. Above all, this project gave me so much experience problem-solving experience. ",
            "IMAGE_6": "img/binary_clock/inside.jpg",
            "IMAGE_7": "img/binary_clock/3d-printing.jpg",
            "TITLE_4": "Future",
            "TEXT_11": "For now, the clock works, and I use it every day to tell time. I have far surpassed my original goal, but I’m still not quite satisfied. I plan to revisit this project in the next few years as I gain more knowledge. I would really like to design and manufacture a specific board for it. This would allow me to make the design much sleeker which I think would be cool. On the software aspect, there is so much room to improve! I learned a lot about c++ while working on the project, but the language has so much more that I haven’t even touched yet. I’m sure that I can cram more functionality into this thing without using more memory. I had a ton of fun working on this, and cannot wait to revisit it with new knowledge!",
            "IMAGE_10": "img/binary_clock/v2.jpg",

        },
    },
    {
        "ID": "2",
        "TITLE": "Bike Industry",
        "TITLE_COLOR": "COLOR_1",
        "TILE_TEXT": "- A small blerb about that thing I did.",
        "TILE_IMAGE": "img/working_bike_industry/tire_slide.gif",
        "HEADER_IMAGE": "img/random/test_image_background.png",
        "CONTENT": {
            "IMAGE_1": "img/random/test_image_wide.jpg",
            "TITLE_1": "This is a Test Title",
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    },
    {
        "ID": "3",
        "TITLE": "Learning Software",
        "TITLE_COLOR": "COLOR_1",
        "TILE_TEXT": "- A small blerb about that thing I did.",
        "TILE_IMAGE": "img/learning_electronics/passing_test.jpg",
        "HEADER_IMAGE": "img/random/test_image_background.png",
        "CONTENT": {
            "IMAGE_1": "img/random/test_image_wide.jpg",
            "TITLE_1": "This is a Test Title",
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    },
    {
        "ID": "4",
        "TITLE": "Hill Top Bike Park",
        "TITLE_COLOR": "COLOR_1",
        "TILE_TEXT": "- A small blerb about that thing I did.",
        "TILE_IMAGE": "img/trail_building_alaska/mini_ex.jpg",
        "HEADER_IMAGE": "img/trail_building_alaska/rock_lip.jpg",
        "CONTENT": {
            "TITLE_1": "This is a Test Title",
            "IMAGE_1": "img/trail_building_alaska/orange_mini.jpg",
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TEXT_2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_2": "img/trail_building_alaska/pump_track.jpg",
            "IMAGE_3": "img/trail_building_alaska/rock_garden.jpg",
            "TEXT_3": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TITLE_2": "This is a Test Title",
            "TEXT_4": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_4": "img/trail_building_alaska/mini_ex.jpg",
            "TEXT_5": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_5": "img/trail_building_alaska/bug_net.jpg",
        },
    },
    {
        "ID": "5",
        "TITLE": "Trail Building",
        "TITLE_COLOR": "COLOR_3",
        "TILE_TEXT": "- Trails don't build themselves.",
        "TILE_IMAGE": "img/trail_building_washington/moss_remove.jpg",
        "HEADER_IMAGE": "img/trail_building_washington/chainsaw_1.jpg",
        "CONTENT": {
            "TITLE_1": "This is a Test Title",
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_1": "img/trail_building_washington/logs.jpg",
            "TEXT_2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TEXT_3": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_2": "img/trail_building_washington/grimice1.jpg",
            "IMAGE_3": "img/trail_building_washington/cougar_jump.jpg",
            "TITLE_2": "This is a Test Title",
            "TEXT_4": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TITLE_3": "This is a Test Title",
            "TEXT_5": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_4": "img/trail_building_washington/rock-done-v-raw.JPG",
        },
    },
    {
        "ID": "6",
        "TITLE": "Custom Hardtail",
        "TITLE_COLOR": "COLOR_2",
        "TILE_TEXT": "- Designing and building a Dh hartail.",
        "TILE_IMAGE": "img/ferrous/v2_fancy1.jpg",
        "HEADER_IMAGE": "img/ferrous/v2_fancy2.jpg",
        "CONTENT": {
            "TITLE_1": "This is a Test Title",
            "TEXT_1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_1": "img/ferrous/v2_benchtop.JPG",
            "TEXT_2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_2": "img/bike_riding/bike_jumping.jpg",
            "TEXT_3": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_4": "img/ferrous/fix_me_plz.jpg",
            "IMAGE_3": "img/ferrous/v1_v2_sidebyside.jpg",
            "TEXT_4": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TITLE_2": "This is a Test Title",
            "TEXT_5": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "TEXT_6": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "IMAGE_5": "img/ferrous/headtube_badge.jpg",
        }
    },
    {
        "ID": "7",
        "TITLE": "Automated Bike Lights",
        "TITLE_COLOR": "COLOR_3",
        "TILE_TEXT": "- Hands free, care free lights for my commuter bike.",
        "TILE_IMAGE": "img/bike_lights/front-light.jpg",
        "HEADER_IMAGE": "img/bike_lights/bike-side-shot.jpg",
        "CONTENT": {
            "TITLE_1": "The Problem",
            "TEXT_1": "The lights on my commuter bike needed to be recharged and I would often fail to do this, resulting in many a pedal home in the dark. ",
            "TITLE_2": "The Solution",
            "TEXT_2": "Create a fully automated light system that charges itself and turns off/on depending on the light outside.",
            "IMAGE_1": "img/bike_lights/front-light.jpg",
            "TEXT_3": "Designing a system that lights a road in front of you is not hard. I wanted to design a system that would do this while seamlessly slipping into the background. If I’m pedaling the bike, I want the light to turn on and off before I have time to think about it. Fully automated designs are often created in the name of novelty and lack any actual benefit. But with a task this simple, I feel that no user interface will create a better end result. After all, my below 50% success rate of remembering to charge lights is not that hard to beat.", 
            "TEXT_4": "I started the design with a Shimano Dynamo hub as a power source. It gives me a nice AC 1-6 watt output anytime the bike is moving faster than 5mph. I built a circuit that takes this input and returns a nice regulated DC 7.2 volts. This is all fine and dandy until you stop at a light and your tail lights stop flashing. So next to the hub, I need a battery to store power for short stops. Switching between these power sources will ensure that the lights are always on when I need them. ", 
            "IMAGE_2": "img/bike_lights/testing-hub.jpg",
            "TEXT_5" : "My commuter bike has a very specific look to it and a bunch of wires and lights all over it kinda ruins it. So the lighting challenge became trying to figure out how to visually make the lights blend into the bike. For the front, I have a cheapo light I ordered off Amazon. I originally intended to use the light as a placeholder while I figured out all the other details, but it actually performs quite well in real life. I’m still up in the air about replacing it. For the taillights, I decided to break out the 3D printer and design my own. I’m pretty happy with the result, I still might change the front light out but as of now it doesn’t look too bad. ",
            "IMAGE_3": "img/bike_lights/versions-rear-lights.jpg",
            "TEXT_6": "Now to control all of this I was torn between making a fully analog system or using a microcontroller. I ended up using a microcontroller for the simple reason that it is so much easier to quickly tweak its functionality. Such as figuring out how dark is dark enough to turn the lights on. As of now, have an Arduino Nano running the show. If in the future I finally settle on a design I am happy with I would love to remove the Arduino in favor of a fully analog system. ",
            "IMAGE_4": "img/bike_lights/bike-lights-board.jpg",
            "TEXT_7": "So as it sits currently, the system as a whole is working and has been in use for a couple of months. The battery system is not hooked because I get distracted and told myself I would wait until winter to figure that out. I am currently working on this. Aside from that, the rest of the system works flawlessly, and novelty aside automatic bike lights are pretty freaking useful. I no longer have to even think about anything when I cruise around after dark. Even going under a tunnel, the lights flick on and off when I exit. I’m excited to continue the project and can’t wait for the end product!",
            "TITLE_3": "Skills Used",
            "TEXT_8": "This has been a pretty diverse project, and I used a lot of different skills on it. I have had to use mechanical problem-solving to attach the physical lights and wires. I obviously had to use electrical engineering to make everything light up paired with some basic Arduino code. I had to use 3D modeling to create the tail lights. Above all, I have had to use management to keep myself on track and make sure I end up with a working system! ",
            "TITLE_4": "Future",
            "TEXT_8": "This has been a pretty diverse project, and I used a lot of different skills on it. I have had to use mechanical problem-solving to attach the physical lights and wires. I obviously had to use electrical engineering to make everything light up paired with some basic Arduino code. I had to use 3D modeling to create the tail lights. Above all, I have had to use management to keep myself on track and make sure I end up with a working system! ",
            "TEXT_9": "Looking into the future, there is still a way to go before it’s done. First off, I need to finish version one of the battery system. Once that is in place I can begin experimenting with wait times for keeping the lights on. Aside from this, I need to continue to tweak the algorithm in charge of turning the lights on and off. Currently, it takes an average of the light readings over the last 10 seconds, but this sometimes turns the lights on at odd times. Next, I really need to make the tail lights just a tad bit brighter. Once this is all done I plan on using the system and continuing to tweak it. I hope to then use the skills future me has acquired to make a final version that is a fraction of the size. Once that is done, I will never have to think about bike lights again!!",
            "IMGAGE_5": "img/bike_lights/rear-lights-side.jpg",
        }
    }
];