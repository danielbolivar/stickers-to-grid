import { GridView } from '@/components/ui/gridview'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row flex-auto h-screen p-5 gap-3 items-stretch">
      <section className='grow-[2] p-5 flex'>
        <Card className='flex-grow p-5'>
          <CardTitle>Stickers to Grid</CardTitle>
          <CardDescription>Drop here the items you want to add to your sticker grid!</CardDescription>
          <CardContent>
            <GridView></GridView>
          </CardContent>
        
        </Card>
      </section>

      <section className='flex-grow p-5 flex'>
        <Card className='flex-grow p-5'>
          <CardTitle>Pick your stickers</CardTitle>
          <CardDescription>Drag here the items you want to add to your sticker grid!</CardDescription>
          <CardContent>

          </CardContent>
        </Card>
      </section>
    </main>
  )
}
