export async function GET() {
  return new Response(JSON.stringify(apiResults[0]));
}

const apiResults = [
  {
    date: "2024-11-10",
    explanation:
      "The largest canyon in the Solar System cuts a wide swath across the face of Mars.  Named Valles Marineris, the grand valley extends over 3,000 kilometers long, spans as much as 600 kilometers across, and delves as much as 8 kilometers deep.  By comparison, the Earth's Grand Canyon in Arizona, USA is 800 kilometers long, 30 kilometers across, and 1.8 kilometers deep.  The origin of the Valles Marineris remains unknown, although a leading hypothesis holds that it started as a crack billions of years ago as the planet cooled.  Several geologic processes have been identified in the canyon.  The featured mosaic was  created from over 100 images of Mars taken by Viking Orbiters in the 1970s.",
    hdurl: "https://apod.nasa.gov/apod/image/2411/marsglobe_viking_1552.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Valles Marineris: The Grand Canyon of Mars",
    url: "https://apod.nasa.gov/apod/image/2411/marsglobe_viking_960.jpg",
  },
  {
    copyright: "Bray Falls",
    date: "2024-11-11",
    explanation:
      "What created an unusual dark streak in Comet Tsuchinshan-Atlas's tail? Some images of the bright comet during mid-October not only caught its impressively long tail and its thin anti-tail, but a rather unexpected feature: a dark streak in the long tail. The reason for the dark streak is currently unclear and a topic of some debate.  Possible reasons include a plume of dark dust, different parts of the bright tail being unusually superposed, and a shadow of a dense part of the coma on smaller dust particles. The streak is visible in the featured image taken on October 14 from Texas, USA. To help future analyses, if you have taken a good image of the comet that clearly shows this dark streak, please send it in to APOD. Comet Tsuchinshan\u2013ATLAS has now faded considerably and is returning to the outer Solar System.   Gallery: Comet Tsuchinshan-ATLAS in 2024",
    hdurl: "https://apod.nasa.gov/apod/image/2411/CometDarkTail_Falls_5122.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Unusual Tails of Comet Tsuchinshan-Atlas",
    url: "https://apod.nasa.gov/apod/image/2411/CometDarkTail_Falls_960.jpg",
  },
  {
    date: "2025-01-05",
    explanation:
      "Have you ever seen a rocket launch -- from space?  A close inspection of the featured time-lapse video will reveal a rocket rising to Earth orbit as seen from the International Space Station (ISS).  The Russian Soyuz-FG rocket was launched in November 2018 from the Baikonur Cosmodrome in Kazakhstan, carrying a Progress MS-10 (also 71P) module to bring needed supplies to the ISS.  Highlights in the 90-second video (condensing about 15-minutes) include city lights and clouds visible on the Earth on the lower left, blue and gold bands of atmospheric airglow running diagonally across the center, and distant stars on the upper right that set behind the Earth. A lower stage can be seen falling back to Earth as the robotic supply ship fires its thrusters and begins to close on the ISS, a space laboratory that celebrated its 25th anniversary in 2023. Astronauts who live aboard the Earth-orbiting ISS conduct, among more practical duties, numerous science experiments that expand human knowledge and enable future commercial industry in low Earth orbit.",
    media_type: "video",
    service_version: "v1",
    title: "Rocket Launch as Seen from the International Space Station",
    url: "https://www.youtube.com/embed/B1R3dTdcpSU?rel=0",
  },
];
