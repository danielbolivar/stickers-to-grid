
import { GridView } from '@/components/ui/gridview'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/stickers'
import StickerList from '@/components/ui/stickerslist'


export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen p-5 gap-5 items-stretch relative">
        
        <Card className='p-5 flex flex-col row-span-6 md:row-span-1'>
          <CardTitle>Stickers to Grid</CardTitle>
          <CardDescription className='invisible md:visible'>Drop here the items you want to add to your sticker grid!</CardDescription>
          <Separator className="my-4 invisible md:visible"></Separator>
          
          <GridView className='relative self-stretch'></GridView>
          
        
        </Card>


        <div className='flex flex-col gap-5'>        
          <Card className='flex-grow p-6 flex flex-col'>
            <CardTitle>Pick your stickers</CardTitle>
            <CardDescription className='invisible md:visible'>Drag here the items you want to add to your sticker grid!</CardDescription>
            <Separator className="my-4 invisible md:visible"></Separator>
            
            <StickerList></StickerList>              

            </Card>
          <Button>Export stickers</Button>
        </div>

    </main>
  )
}
