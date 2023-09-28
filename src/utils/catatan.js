const getDataCatatan = () => {
    return [{
            id: 1,
            title: 'Kriteria Utama 1: Mampu Menampilkan Daftar Catatan',
            body: 'Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan. Memanfaatkan state component untuk menyimpan data catatan. Menggunakan teknik array map untuk menampilkan daftar catatan.',
            archived: false,
            createdAt: new Date().toISOString(),
        },
        {
            id: 2,
            title: 'Kriteria Utama 2: Mampu Menambahkan Catatan',
            body: 'Aplikasi harus mampu menambahkan data catatan baru. Memanfaatkan controlled component dalam membuat form input. Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh). Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut. Untuk id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().',
            archived: false,
            createdAt: new Date().toISOString(),
        },
        {
            id: 3,
            title: 'Kriteria Utama 3: Mampu Menghapus Catatan',
            body: 'Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan. Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.',
            archived: false,
            createdAt: new Date().toISOString(),
        },
        {
            id: 4,
            title: 'Kriteria Opsional Penilaian',
            body: 'Kriteria Opsional 1: Terdapat Fitur Pencarian Catatan. Kriteria Opsional 2: Terdapat Limit Karakter pada Input Judul Catatan. Kriteria Opsional 3: Terdapat Fitur Arsip Catatan',
            archived: false,
            createdAt: new Date().toISOString(),
        },
    ];
}

export {
    getDataCatatan
};