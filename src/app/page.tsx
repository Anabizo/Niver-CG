"use client";

import Image from "next/image";

export default function BirthdayPage() {
	const yourName = "Dona Onça 🐆";
	const message =
		"Hoje é o seu dia especial e com esse pequenino site te desejo parabéns! Você é uma pessoa incrível, cheia de luz e energia positiva, e o mundo é definitivamente melhor contigo nele. Sou grata por cada momento que passamos juntos, por cada conversa e cada risada, e vamos ter muitos mais ainda! Vamos crescer e conquistar as coisas juntos, torço pelo seu sucesso e espero que só receba alegria, carinho, saúde, dindin e momentos inesquecíveis! Feliz niver :3";
	const imageUrl = "/cg-e-eu.jpeg";

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white rounded-3xl shadow-xl overflow-hidden">
					{/* Cabeçalho com confetes */}
					<div className="bg-blue-950 py-8 px-6 sm:px-10 text-center relative overflow-hidden">
						<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
							{[...Array(20)].map((_, i) => (
								<div
									key={i}
									className="absolute w-2 h-2 rounded-full bg-yellow-300 opacity-70"
									style={{
										top: `${Math.random() * 100}%`,
										left: `${Math.random() * 100}%`,
										transform: `scale(${Math.random() * 0.5 + 0.5})`,
									}}
								/>
							))}
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-bounce">
							PARABÉNS, CARAIOOOO! 🎉
						</h1>
					</div>

					{/* Imagem */}
					<div className="p-6 sm:p-8">
						<div className="relative h-96 sm:h-80 md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
							<Image
								src={imageUrl}
								alt="Celebração de aniversário"
								fill
								className="object-cover object-top"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
						</div>
					</div>

					{/* Mensagem */}
					<div className="px-6 sm:px-10 pb-8">
						<div className="prose prose-lg max-w-none text-gray-700">
							<p className="text-lg sm:text-xl leading-relaxed mb-6">
								{message}
							</p>

							<div className="mt-8 pt-6 border-t border-gray-200">
								<p className="text-right text-gray-600 italic">
									Com todo carinho,
									<br />
									<span className="font-semibold text-blue-950">
										{yourName}
									</span>
								</p>
							</div>
						</div>
					</div>

					{/* Rodapé decorativo */}
					<div className="bg-blue-950 h-2" />
				</div>

				{/* Efeito de bolinhas flutuantes */}
				<div className="fixed inset-0 overflow-hidden pointer-events-none">
					{[...Array(30)].map((_, i) => (
						<div
							key={i}
							className="absolute rounded-full opacity-20"
							style={{
								backgroundColor: ["#f472b6", "#a78bfa", "#fbbf24"][
									Math.floor(Math.random() * 3)
								],
								width: `${Math.random() * 10 + 5}px`,
								height: `${Math.random() * 10 + 5}px`,
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								animation: `float ${Math.random() * 10 + 10}s linear infinite`,
								animationDelay: `${Math.random() * 5}s`,
							}}
						/>
					))}
				</div>
			</div>

			{/* Estilos para a animação */}
			<style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
		</div>
	);
}
