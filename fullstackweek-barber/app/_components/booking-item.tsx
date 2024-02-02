import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export const BookingItem = ()=>{
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d]] w-fit"
                        >Confirmado</Badge>

                    <h2>Corte de Cabelo</h2>
                    <div className="flex items-center gap-2">
                        <Avatar  className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png"/>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
                    <p>Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p>9:45</p>
                </div>
            </CardContent>
        </Card>
    )
}