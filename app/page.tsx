
import { GridView } from '@/components/ui/gridview'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen p-5 gap-3 items-stretch relative">

        <Card className='grow-[2] p-5 flex flex-col relative self-stretch'>
          <CardTitle>Stickers to Grid</CardTitle>
          <CardDescription className='invisible md:visible'>Drop here the items you want to add to your sticker grid!</CardDescription>
          <Separator className="my-4 invisible md:visible"></Separator>
          
          <GridView className='absolute flex-1 self-stretch'></GridView>
          
        
        </Card>


        <div className='flex-grow flex flex-col gap-5'>        
          <Card className='flex-grow p-6 flex flex-col'>
            <CardTitle>Pick your stickers</CardTitle>
            <CardDescription className='invisible md:visible'>Drag here the items you want to add to your sticker grid!</CardDescription>
            <Separator className="my-4 invisible md:visible"></Separator>
          </Card>
          <Button>Export stickers</Button>
        </div>

    </main>
  )
}
