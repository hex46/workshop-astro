import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const Nav = (props: {planets: {title: string, url: string}[]}) => {;
  return (
<DropdownMenu>
  <DropdownMenuTrigger>Pages</DropdownMenuTrigger>
  <DropdownMenuContent>
    {props.planets.map(planet => (
      <DropdownMenuItem key={planet.title} onSelect={() => document.location.href = planet.url}>{planet.title}</DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
  )
}
