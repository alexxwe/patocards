import Builder from './components/Builder'
import Examples from './components/Examples'

export default function App() {
    return (
        <main>
            <a href='https://github.com/dawichi/patocards' target='_blank' className='absolute top-0 left-0 p-2 text-sm text-blue-400 underline'>Source code</a>
            <div className='md:grid grid-cols-2 lg:grid-cols-3 pt-10'>
                <section className='flex flex-col items-center pb-10 md:pb-0'>
                    <h2 className='mb-10 text-2xl text-center'>PatoCard generator</h2>
                    <Builder />
                </section>
                <section className='lg:col-span-2 h-screen'>
                    <h2 className='text-2xl text-center'>Examples:</h2>
                    <div id='scrollable' className='m-5 flex flex-wrap items-center justify-center gap-4 h-[800px] md:overflow-y-scroll md:border py-10'>
                        <Examples/>
                    </div>
                </section>
            </div>
        </main>
    )
}
