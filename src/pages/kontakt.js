export const kontaktRender = () => {
    const kontaktDomElement = document.getElementById('kontakt');
    kontaktDomElement.innerHTML = `
           <div class="kontakt">
                    <h2 class="kontakt__header" data-i18n="Formularz Kontaktowy">
                        Formularz Kontaktowy
                    </h2>
                    <form class="kontakt__form" >
                        <div class="kontakt__form__group">
                            <label for="name" data-i18n="Imię i Nazwisko:">Imię i Nazwisko:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="kontakt__form__group">
                            <label for="service" data-i18n="Usługa">Usługa:</label>
                            <select id="service" name="service" required>
                                <option
                                    value=""
                                    disabled
                                    selected
                                    data-i18n="Wybierz rodzaj usługi"
                                >
                                    Wybierz rodzaj usługi
                                </option>
                                <option
                                    value="Animacje reklamowe 2D"
                                    data-i18n="Animacje reklamowe 2D"
                                >
                                    Animacje reklamowe 2D
                                </option>
                                <option
                                    value="Animacje edukacyjne 2D"
                                    data-i18n="Animacje edukacyjne 2D"
                                >
                                    Animacje edukacyjne 2D
                                </option>
                                <option
                                    value="Wsparcie produkcji filmów animowanych 2D"
                                    data-i18n="Wsparcie produkcji filmów animowanych 2D"
                                >
                                    Wsparcie produkcji filmów animowanych 2D
                                </option>
                                <option
                                    value="Animacje na strony internetowe 2D"
                                    data-i18n="Animacje na strony internetowe 2D"
                                >
                                    Animacje na strony internetowe 2D
                                </option>
                                <option
                                    value="Animacje reklamowe 3D"
                                    data-i18n="Animacje reklamowe 3D"
                                >
                                    Animacje reklamowe 3D
                                </option>
                                <option
                                    value="Animacje edukacyjne 3D"
                                    data-i18n="Animacje edukacyjne 3D"
                                >
                                    Animacje edukacyjne 3D
                                </option>
                                <option
                                    value="Wsparcie produkcji filmów animowanych 3D"
                                    data-i18n="Wsparcie produkcji filmów animowanych 3D"
                                >
                                    Wsparcie produkcji filmów animowanych 3D
                                </option>
                                <option
                                    value="Animacje na strony internetowe 3D"
                                    data-i18n="Animacje na strony internetowe 3D"
                                >
                                    Animacje na strony internetowe 3D
                                </option>
                            </select>
                        </div>
                        <div class="kontakt__form__group">
                            <label for="seconds" data-i18n="Liczba sekund">Liczba sekund:</label>
                            <input type="number" id="seconds" name="seconds" required />
                        </div>
                        <div class="kontakt__form__group">
                            <label for="time" data-i18n="Czas wykonania (w tygodniach):"
                                >Czas wykonania (w tygodniach):</label
                            >
                            <input type="number" id="time" name="time" required />
                        </div>
                        <div class="kontakt__form__group">
                            <label for="message" data-i18n="Dłuższa wiadomość:"
                                >Dłuższa wiadomość:</label
                            >
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <div class="kontakt__form__group">
                            <label for="consent">
                                <input type="checkbox" id="consent" name="consent" required />
                                <span
                                    data-i18n="Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności."
                                    >Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
                                    polityką prywatności.</span
                                >
                            </label>
                        </div>
                        <div class="kontakt__form__group">
                            <button type="submit" data-i18n="Wyślij">Wyślij</button>
                        </div>
                    </form>
                </div>
    `;
};
