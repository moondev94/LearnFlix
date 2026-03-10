export default function About() {
    return (
        <section className="about-page">

            <div className="page-transition">

                <div className="about-card">

                    <h2>Sobre o Learn<span>Flix</span></h2>

                    <p>
                        O <strong>LearnFlix</strong> é uma plataforma de gestão acadêmica
                        desenvolvida para integrar alunos, professores e gestores em um
                        único sistema digital. O objetivo é facilitar a organização do
                        conteúdo educacional e melhorar o acompanhamento do desempenho
                        acadêmico.
                    </p>

                    <p>
                        A plataforma permite que professores organizem disciplinas e
                        conteúdos por módulos, que alunos acompanhem seu progresso e
                        acessem materiais didáticos, e que gestores tenham uma visão
                        consolidada das informações acadêmicas da instituição.
                    </p>

                    <h3>Principais funcionalidades</h3>

                    <ul>
                        <li>Cadastro de usuários (alunos, professores e gestores)</li>
                        <li>Organização de disciplinas e conteúdos por módulos</li>
                        <li>Acompanhamento do desempenho acadêmico</li>
                        <li>Disponibilização de materiais didáticos</li>
                        <li>Visualização de prazos de trabalhos e avaliações</li>
                    </ul>

                    <h3>Objetivo do projeto</h3>

                    <p>
                        Este projeto foi desenvolvido como parte da disciplina de
                        <strong> Desenvolvimento Front-End com Frameworks</strong>,
                        utilizando React para construção de interfaces modernas,
                        responsivas e baseadas em componentes reutilizáveis.
                    </p>

                    <p className="about-footer">
                        Desenvolvido por Luan Martins.
                    </p>

                </div>
            </div>

        </section>
    );
}