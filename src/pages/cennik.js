export const cennikRender = () => {
    const cennikDomElement = document.getElementById('cennik');
    cennikDomElement.innerHTML = `
            <div class="cennik">
                    <h2 class="cennik__header" data-i18n="Usługi Animacji">Usługi Animacji</h2>
                    <table class="cennik__tabela">
                        <thead>
                            <tr>
                                <th class="cennik__tabela__item" data-i18n="Usługa">Usługa</th>
                                <th class="cennik__tabela__item" data-i18n="Liczba sekund">
                                    Liczba sekund
                                </th>
                                <th class="cennik__tabela__item" data-i18n="Cena">Cena</th>
                                <th class="cennik__tabela__item" data-i18n="Czas wykonania">
                                    Czas wykonania
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cennik__tabela__item" data-i18n="Animacje reklamowe 2D">
                                    Animacje reklamowe 2D
                                </td>
                                <td class="cennik__tabela__item">1</td>
                                <td class="cennik__tabela__item">300 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="2 tygodnie (30s)">
                                    2 tygodnie (30s)
                                </td>
                            </tr>
                            <tr>
                                <td class="cennik__tabela__item" data-i18n="Animacje edukacyjne 2D">
                                    Animacje edukacyjne 2D
                                </td>
                                <td class="cennik__tabela__item">1</td>
                                <td class="cennik__tabela__item">200 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="3 tygodnie (30s)">
                                    3 tygodnie (30s)
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="cennik__tabela__item"
                                    data-i18n="Wsparcie produkcji filmów animowanych 2D"
                                >
                                    Wsparcie produkcji filmów animowanych 2D
                                </td>
                                <td class="cennik__tabela__item">300</td>
                                <td class="cennik__tabela__item">90,000 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="6 miesięcy">
                                    6 miesięcy
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="cennik__tabela__item"
                                    data-i18n="Animacje na strony internetowe 2D"
                                >
                                    Animacje na strony internetowe 2D
                                </td>
                                <td class="cennik__tabela__item">45</td>
                                <td class="cennik__tabela__item">13,500 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="1 miesiąc">
                                    1 miesiąc
                                </td>
                            </tr>
                            <tr>
                                <td class="cennik__tabela__item" data-i18n="Animacje reklamowe 3D">
                                    Animacje reklamowe 3D
                                </td>
                                <td class="cennik__tabela__item">1</td>
                                <td class="cennik__tabela__item">1000 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="3 tygodnie (30s)">
                                    3 tygodnie (30s)
                                </td>
                            </tr>
                            <tr>
                                <td class="cennik__tabela__item" data-i18n="Animacje edukacyjne 3D">
                                    Animacje edukacyjne 3D
                                </td>
                                <td class="cennik__tabela__item">1</td>
                                <td class="cennik__tabela__item">800 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="5 tygodni (30s)">
                                    5 tygodni (30s)
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="cennik__tabela__item"
                                    data-i18n="Wsparcie produkcji filmów animowanych 3D"
                                >
                                    Wsparcie produkcji filmów animowanych 3D
                                </td>
                                <td class="cennik__tabela__item">300</td>
                                <td class="cennik__tabela__item">300,000 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="1 rok">1 rok</td>
                            </tr>
                            <tr>
                                <td
                                    class="cennik__tabela__item"
                                    data-i18n="Animacje na strony internetowe 3D"
                                >
                                    Animacje na strony internetowe 3D
                                </td>
                                <td class="cennik__tabela__item">45</td>
                                <td class="cennik__tabela__item">45,000 PLN</td>
                                <td class="cennik__tabela__item" data-i18n="2 miesiące">
                                    2 miesiące
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    `;
};
