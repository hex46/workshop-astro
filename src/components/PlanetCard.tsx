import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const PlanetCard = (props: {planet: {name: string, title: string, date: Date, url: string}}) => {;
  return (
    <Card className="bg-gradient-to-t from-slate-800">
    <CardHeader>
        <CardTitle>{props.planet.name}</CardTitle>
    <CardDescription>Created date : {props.planet.date.toLocaleDateString()}</CardDescription>
    </CardHeader>
    <CardContent>
        <p>{props.planet.title}</p>
    </CardContent>
    <CardFooter>
        <p><a href={props.planet.url}>Read more...</a></p>
    </CardFooter>
    </Card>
  )
}