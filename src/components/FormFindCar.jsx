<section id="search">
    <form>
        <div class="label-input">
            <label>
                Tipe Driver
            </label>
            <select name="type">
                <option value="Dengan Sopir">
                    Dengan Sopir
                </option>
                <option value="Tanpa Sopir (Lepas Kunci)">
                    Tanpa Sopir (Lepas Kunci)
                </option>
                <option disabled="" value="default">
                    Pilih Tipe Driver
                </option>
            </select>
        </div>
        <div class="label-input">
            <label for="date">
                Tanggal
            </label>
            <input id="date" name="date" type="date" value="" />
        </div>
        <div class="label-input">
            <label for="time">
                Waktu Jemput/Ambil
            </label>
            <input id="time" name="time" type="time" value="" />
        </div>
        <div class="label-input">
            <label for="totalPassenger">
                Jumlah Penumpang (optional)
                </label>
            <input id="totalPassenger" name="totalPassenger" placeholder="Jumlah Penumpang (optional)" type="number" value="" />
        </div>
        <div>
            <button type="submit" class="green-button">
                Cari Mobil
            </button>
        </div>
    </form>
    <div id="cars">
    </div>
</section>