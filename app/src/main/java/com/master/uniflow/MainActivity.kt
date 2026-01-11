package com.master.uniflow

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.master.uniflow.data.local.AppDatabase
import com.master.uniflow.data.local.model.SubjectEntity
import com.master.uniflow.databinding.ActivityMainBinding
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    // Khai báo biến binding
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val db = AppDatabase.getDatabase(this)
        val dao = db.appDao()

        lifecycleScope.launch(Dispatchers.IO) {
            // Chèn thử một môn học mẫu
            val testSubject = SubjectEntity(name = "Lập trình Android", teacher = "Giảng viên A")
            dao.upsertSubject(testSubject)
        }
        // 1. Khởi tạo binding
        binding = ActivityMainBinding.inflate(layoutInflater)

        // 2. Thiết lập nội dung view từ binding.root (không dùng setContent { ... })
        setContentView(binding.root)

        // Ví dụ: Truy cập một TextView trong XML qua binding
         binding.tvHello.text = "Chào mừng tới UniFlow!"
    }
}