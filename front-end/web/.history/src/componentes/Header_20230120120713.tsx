import LogoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'phosphor-react'
import { useState } from 'react';


export function Header() {



    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={LogoImage} alt="habits" />
            <Dialog.Root>
                <Dialog.Trigger
                    type="button"                    
                    className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
                >
                    <Plus size={20} className="text-violet-500" />
                    Novo hábito
                    </Dialog.Trigger>
            </Dialog.Root>

            <Dialog.Portal>
                <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>
                <Dialog.Content>
                    Contúdo do Modal
                </Dialog.Content>
            </Dialog.Portal>

        </div>
    )
}