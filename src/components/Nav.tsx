import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const Nav = (props: {planets: {title: string, url: string}[]}) => {;
  return (
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    {props.planets.map(planet => (
      <DropdownMenuItem onSelect={() => document.location.href = planet.url}>{planet.title}</DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
  )
}


{/* <nav class="navbar">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Index</a>
  </div>
  <ul class="menu menu-horizontal px-1">
    <li>
      <details>
        <summary>Planets</summary>
        <ul class="p-2">
          {
            planets.map((planet) => (
              <li>
                <a href={planet.url}>{planet.frontmatter.planet}</a>
              </li>
            ))
          }
        </ul>
      </details>
    </li>
  </ul>
</nav> */}
