import Builder from './components/Builder'
import Examples from './components/Examples'

export default function App() {
    return (
        <main className='md:grid grid-cols-2 lg:grid-cols-3 pt-20'>
            <section className='flex flex-col items-center pb-20 md:pb-0'>
                <h2 className='mb-10 text-2xl text-center'>PatoCard generator</h2>
                <Builder />
            </section>
            <section className='lg:col-span-2 h-screen'>
                <h2 className='text-2xl text-center'>Examples:</h2>
                <div className='m-5 flex flex-wrap items-center justify-center gap-4 h-[700px] md:overflow-y-scroll md:border py-10'>
                    <Examples/>
                </div>
            </section>
        </main>
    )
}
