const types = [
    'from-red-900 via-red-700 to-amber-700',
    'from-green-900 via-green-700 to-emerald-700',
    'from-blue-900 via-blue-700 to-indigo-700',
]

const Card = ({id, type, stats, title, image }: { id?: string, type: number; title: string; stats: number[]; image: string }) => (
    <div
        id={id}
        className={`bg-gradient-to-br ${types[type]} py-2 px-4 rounded`}
        style={{ width: '315px', height: '450px' }}
        title='Click to copy URL image'
        onClick={() => navigator.clipboard.writeText(image)}
    >
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
                    <i className='bi bi-suit-heart-fill pr-2'></i> {stats[0]}
                </span>
                <span>
                    <i className='ra ra-sword pr-2'></i> {stats[1]}
                </span>
                <span>
                    <i className='ra ra-shield pr-2'></i> {stats[2]}
                </span>
            </footer>
        </article>
    </div>
)

export default Card
