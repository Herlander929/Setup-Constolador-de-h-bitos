

export function ProgressBar() {
    return (
        <div className='h-3 rounded-3xl bg-zinc-700 w-full mt-4'>
        <div role="progressbar"
        aria-label='Progresso de hábitos completados no dia'
        aria-aria-valuenow={75}
        className='h-3 rounded-xl bg-violet-600 w-3/4'
        />
    </div>
    )
}