export async function GET() {
  return new Response(
    JSON.stringify(
      [
        {
          date: "2024-11-10",
          explanation:
            "The largest canyon in the Solar System cuts a wide swath across the face of Mars.  Named Valles Marineris, the grand valley extends over 3,000 kilometers long, spans as much as 600 kilometers across, and delves as much as 8 kilometers deep.  By comparison, the Earth's Grand Canyon in Arizona, USA is 800 kilometers long, 30 kilometers across, and 1.8 kilometers deep.  The origin of the Valles Marineris remains unknown, although a leading hypothesis holds that it started as a crack billions of years ago as the planet cooled.  Several geologic processes have been identified in the canyon.  The featured mosaic was  created from over 100 images of Mars taken by Viking Orbiters in the 1970s.",
          hdurl:
            "https://apod.nasa.gov/apod/image/2411/marsglobe_viking_1552.jpg",
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
          hdurl:
            "https://apod.nasa.gov/apod/image/2411/CometDarkTail_Falls_5122.jpg",
          media_type: "image",
          service_version: "v1",
          title: "The Unusual Tails of Comet Tsuchinshan-Atlas",
          url: "https://apod.nasa.gov/apod/image/2411/CometDarkTail_Falls_960.jpg",
        },
      ][0],
    ),
  );
}
