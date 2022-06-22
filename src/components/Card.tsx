const types = [
    'from-red-800 via-red-600 to-red-700',
    'from-green-900 via-green-700 to-emerald-700',
    'from-blue-900 via-blue-700 to-indigo-700',
    'from-amber-500 via-yellow-400 to-amber-500',
    'from-stone-800 via-zinc-700 to-stone-800',
]

const Stat = ({ icon, isItem, value }: { icon: string, isItem: boolean, value: number }) => {
    return (
        <span>
            <i className={`${icon} pr-1`}></i> {isItem && value ? '+' : ''} {value}
        </span>
    )
}

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
                <Stat isItem={type === 4} value={stats[0]} icon='bi bi-suit-heart-fill' />
                <Stat isItem={type === 4} value={stats[1]} icon='ra ra-sword' />
                <Stat isItem={type === 4} value={stats[2]} icon='ra ra-feather-wing' />
            </footer>
        </article>
    </div>
)

export default Card
