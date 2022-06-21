import Card from './Card'
import { useFormInput } from '../hooks/useFormInput'
import html2canvas from 'html2canvas'

function exportAsImage(element: HTMLElement | null) {
    if (!element) return
    return html2canvas(element, {
        allowTaint: false,
        useCORS: true,
    })
    .then((canvas) => {
        const a = document.createElement('a')
        a.href = canvas.toDataURL('image/png')
        a.download = 'patocard.png'
        a.click()
    })
}
export default function Builder() {
    const card = {
        title: useFormInput(),
        type: useFormInput(),
        url: useFormInput(),
        stats: [useFormInput('1'), useFormInput('1'), useFormInput('1')]
    }

    const InputNumber = ({ idx, title }: { idx: number, title: string}) => (
        <input
            className='bg-zinc-700 p-2 h-10 rounded'
            type='number'
            min={1}
            max={9}
            {...card.stats[idx].inputProp}
            placeholder={title}
        />
    )


    return (
        <>
            <section className='w-screen px-4 md:w-96 grid grid-cols-2 gap-2 mb-10'>
                <input
                    className='bg-zinc-700 p-2 h-10 rounded'
                    type='text'
                    {...card.title.inputProp}
                    placeholder='Title...'
                />

                <select className='bg-zinc-700 p-2 h-10 rounded' {...card.type.inputProp}>
                    <option value='0' className='bg-red-700'>🔥 Fire</option>
                    <option value='1' className='bg-green-700'>☘ Plant</option>
                    <option value='2' className='bg-blue-700'>🌊 Water</option>
                </select>

                <input
                    className='bg-zinc-700 p-2 h-10 rounded col-span-2'
                    type='text'
                    {...card.url.inputProp}
                    placeholder='Image URL...'
                />

                <div className='col-span-2 grid grid-cols-3 gap-2'>
                    <InputNumber idx={0} title={'Live (1-9)'} />
                    <InputNumber idx={1} title={'Attack (1-9)'} />
                    <InputNumber idx={2} title={'Defense (1-9)'} />
                </div>
            </section>

            <Card
                id='printable'
                type={Number(card.type.inputProp.value)}
                stats={[
                    Number(card.stats[0].inputProp.value),
                    Number(card.stats[1].inputProp.value),
                    Number(card.stats[2].inputProp.value),
                ]}
                title={card.title.inputProp.value}
                image={card.url.inputProp.value}
            />

            <p className='mt-10'>Configure your own cards and <br/> download them as .png images</p>
            <button
                className='bg-zinc-700 p-2 h-10 rounded mt-4 hover:bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-700'
                onClick={() => exportAsImage(document.getElementById('printable'))}
            >
                Export as image
            </button>
        </>
    )
}