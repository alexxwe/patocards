export default function App() {
    const types = [
        'from-red-900 via-red-700 to-amber-700',
        'from-green-900 via-green-700 to-emerald-700',
        'from-blue-900 via-blue-700 to-indigo-700',
    ]

    const Card = ({ type, stats, title, image }: { type: number; title: string; stats: number[]; image: string }) => (
        <div className={`bg-gradient-to-br ${types[type]} py-2 px-4 rounded`} style={{ width: '315px', height: '450px' }}>
            <article className='h-full py-2 px-2 flex flex-col'>
                <h2 className='text-2xl pb-2'>{title}</h2>

                <section
                    className='rounded h-full'
                    style={{
                        backgroundImage: `url("${image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></section>

                <footer className='pt-2 flex justify-around'>
                    <span>
                        <i className='bi bi-suit-heart-fill pr-2'></i> {stats[2]}
                    </span>
                    <span>
                        <i className='ra ra-sword pr-2'></i> {stats[0]}
                    </span>
                    <span>
                        <i className='ra ra-shield pr-2'></i> {stats[1]}
                    </span>
                </footer>
            </article>
        </div>
    )

    return (
        <main className="">
            <h2 className="mt-20 text-2xl text-center">Generate cards</h2>
            <input />
            <div className='m-20 flex flex-wrap items-center justify-center gap-4'>
                <Card type={0} stats={[2, 5, 1]} title={'Angry Marcos >:c'} image={'data:image/png;base64,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'} />
                <Card type={1} stats={[3, 2, 2]} title={'un pato'} image={'https://images.emojiterra.com/google/android-11/512px/1f986.png'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
                <Card type={2} stats={[5, 5, 5]} title={'Marcos Poseidón'} image={'https://minimanual.com/wp-content/uploads/2021/02/poseidon-3.jpg'} />
            </div>
        </main>
    )
}
